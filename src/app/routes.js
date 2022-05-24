// import DashboardHome from "../features/dashboard/DashboardHome";
// import BillingHome from "../features/billing-addresses/BillingHome";
// import TransactionHome from "../features/transaction/TransactionHome";
// import PurchasedHome from "../features/purchased/PurchasedHome";
// import ManageCardsHome from "../features/manage-cards/ManageCardsHome";
// import ShopHome from "../features/shop/ShopHome";

// const routes = [
// 	{
// 		path: "/web",
// 		exact: true,
// 		component: DashboardHome,
// 	},
// 	{
// 		path: "/web/billing",
// 		exact: true,
// 		component: BillingHome,
// 	},
// 	{
// 		path: "/web/purchased",
// 		exact: true,
// 		component: PurchasedHome,
// 	},
// 	{
// 		path: "/web/purchasedHistory",
// 		exact: true,
// 		component: TransactionHome,
// 	},
// 	{
// 		path: "/web/cards",
// 		exact: true,
// 		component: ManageCardsHome,
// 	},
// 	{
// 		path: "/web/shop",
// 		exact: true,
// 		component: ShopHome,
// 	},
// ];
// export default routes;

export const regApprovalStepsRoutes = "/approvalProcess/companyRegistration/";
export const overview = 'web/overview';

const step01 =  regApprovalStepsRoutes+"step01";
const step02 =  regApprovalStepsRoutes+"step02";
const step03 =  regApprovalStepsRoutes+"step03";
const step04 =  regApprovalStepsRoutes+"step04";
const step05 =  regApprovalStepsRoutes+"step05";

export const REG_APPROVAL = {step01, step02, step03, step04, step05};
