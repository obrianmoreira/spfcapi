import { CreateSearches } from "../../controllers/database/create";
import { ReadSearches } from "../../controllers/database/read";

export async function POST(request) {
    const data = await request.json();
    const {search} = data;
    const searchHistory = search.searchHistory;
    const searchId = search.randomId;
    return Response.json('Done');
}

export async function GET() {
    const Searches = CreateSearches();
    const id = Searches.RandomID().searchId;;
    return Response.json(id)
}