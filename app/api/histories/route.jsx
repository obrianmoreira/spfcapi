import CreateHistories, { CreateYears } from "../../controllers/database/create";
import { ReadHistories } from "../../controllers/database/read";

export async function POST(request){
    const data = await request.json();
    const {histories} = data;
    const titleHistory = histories.dateContent.titleHistory;
    const subTitleHistory = histories.dateContent.subTitleHistory;
    const descriptionHistory = histories.dateContent.descriptionHistory;
    CreateHistories(titleHistory, subTitleHistory, descriptionHistory);
    return Response.json('Correctly done');
}

export async function GET() {
    const query = await ReadHistories();
    return Response.json(query);
}