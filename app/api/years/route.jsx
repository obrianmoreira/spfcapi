import CreateData, { CreateYears } from "../../controllers/database/create";
import ReadYears from "../../controllers/database/read";

export async function POST(request){
    const data = await request.json();
    const {histories} = data;
    const typeData = histories.years.dateContent.typeData;
    const dateContent = histories.years.dateContent.dateContent;
    const titleYears = histories.years.dateContent.titleHistory;
    const subTitleYears = histories.years.dateContent.subTitleHistory;
    const descriptionYears = histories.years.dateContent.descriptionHistory;
    CreateYears(typeData, dateContent, titleYears, subTitleYears, descriptionYears);
    return Response.json('Correctly done');
}

export async function GET() {
    const query = await ReadYears();
    return Response.json(query);
}