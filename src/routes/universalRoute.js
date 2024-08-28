import { Router } from "express"
import authCheck from "../middlewares/authMiddleware.js"
import {
    countryList, companyTypeList, companySizeList,
    employeeLevelList, employeeTypeList, provationPeriodList,
    offboardingTypeList, offboardingReasonList
} from "../controllers/universalController.js"

const route = Router()

// public routs
route.route("/countries").get(countryList)
route.route("/company-types").get(companyTypeList)
route.route("/company-sizes").get(companySizeList)

// private routs
route.route("/employee-levels").get(employeeLevelList)
route.route("/employee-types").get(employeeTypeList)
route.route("/provation-period").get(provationPeriodList)
route.route("/offboarding-types").get(offboardingTypeList)
route.route("/offboarding-reasons").get(offboardingReasonList)

export default route



