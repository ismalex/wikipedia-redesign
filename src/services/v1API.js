import moment from "moment";
import { apiFunctions } from "../api";
import { V1_API_BASE_URL } from "./constant-info";

const yesterdaysDate = moment().subtract(1, "days").format("YYYY/MM/DD");
const currentDay = moment().format("D");
const currentMonth = moment().format("M");

//
export async function getTrendingArticlesToday() {
  try {
    const response = await apiFunctions.get(
      `${V1_API_BASE_URL.trendingToday}${yesterdaysDate}`
    );
    const [item] = response.items;

    return item.articles;
  } catch (error) {
    return console.error("v1 API Service error:", error);
  }
}

//
export async function getSelectedOnThisDay() {
  try {
    const response = await apiFunctions.get(
      `${V1_API_BASE_URL.selectedOnThisDay}${currentMonth}/${currentDay}`
    );
    console.log("response", response);
    return response.selected.slice(1, 8);
  } catch (error) {
    return console.error("v1 API Service error:", error);
  }
}

export async function featuredArticlesToday() {
  try {
    const response = await apiFunctions.get(
      `${V1_API_BASE_URL.featuredToday}${yesterdaysDate}`
    );

    return response;
  } catch (error) {
    return console.error("v1 API Service error:", error);
  }
}
