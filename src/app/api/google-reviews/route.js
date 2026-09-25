import { NextResponse } from "next/server";

const PLACE_ID = "ChIJ31l5uGWYyzsR9zY2qk9lDiA";

export async function GET() {
  try {
    const apiKey = process.env.GOOGLE_PLACES_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "GOOGLE_PLACES_API_KEY is missing" },
        { status: 500 }
      );
    }

    const response = await fetch(
      `https://places.googleapis.com/v1/places/${PLACE_ID}?languageCode=en`,
      {
        headers: {
          "Content-Type": "application/json",
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask":
            "displayName,rating,userRatingCount,reviews",
        },
        next: {
          revalidate: 3600,
        },
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("Google API Error:", data);

      return NextResponse.json(
        { error: "Google API error", details: data },
        { status: response.status }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to load Google reviews" },
      { status: 500 }
    );
  }
}