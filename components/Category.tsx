import Image from "next/image";

import { topCategoryStyles } from "@/constants";
import { cn } from "@/lib/utils";

import { Progress } from "./ui/progress";

const Category = ({ category }: CategoryProps) => {
  const {
    bg,
    circleBg,
    text: { main, count },
    progress: { bg: progressBg, indicator },
    icon,
  } = topCategoryStyles[category.name as keyof typeof topCategoryStyles] ||
  topCategoryStyles.default;

  return (
    <div className={cn("gap-[18px] flex p-4 rounded-xl", bg)}>
      <figure className={cn("flex-center size-10 rounded-full", circleBg)}>
        <Image src={icon} width={20} height={20} alt={category.name} />
      </figure>
      <div className="flex w-full flex-1 flex-col gap-2">
        <div className="text-14 flex justify-between">
          <h2 className={cn("font-medium", main)}>{category.name}</h2>
          <h3 className={cn("font-normal", count)}>{category.count}</h3>
        </div>
        <Progress
          value={(category.count / category.totalCount) * 100}
          className={cn("h-2 w-full", progressBg)}
          indicatorClassName={cn("h-2 w-full", indicator)}
        />
      </div>
    </div>
  );
};

export default Category;



// #NEXT
// NEXT_PUBLIC_SITE_URL=http://localhost:3000

// #APPWRITE
// NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
// NEXT_PUBLIC_APPWRITE_PROJECT=669cda3a002641adb283
// APPWRITE_DATABASE_ID=669cde19001e96b08f50
// APPWRITE_USER_COLLECTION_ID=669cde27000fd09708a4
// APPWRITE_ITEM_COLLECTION_ID=
// APPWRITE_BANK_COLLECTION_ID=669cde8f0000c31d1118
// APPWRITE_TRANSACTION_COLLECTION_ID=669cde65001005beb1da
// NEXT_APPWRITE_KEY=dfa97cf9f2c8b81b7dac927c862bcf0b998c7cab4ca2b4656de96d34bf8df3e77e34c3fa0094f89687b95aa9fc1177d0e1cd319aa4c76d1367b7bf8c8693ec5f1e69ec3b3fcb3d54352956b536bbca1afaa20d00fbf6dd25b4788ac82769311832563127ba4982568bd7b032c27a2df3b077b9672a0600a7813d93bfbd089c13

// #PLAID
// PLAID_CLIENT_ID=
// PLAID_SECRET=
// PLAID_ENV=
// PLAID_PRODUCTS=
// PLAID_COUNTRY_CODES=

// #DWOLLA
// DWOLLA_KEY=RmsAY5oQKzAv5TJG2XeAXygSxqqgAWSO3v3h0GbYh2eUQiiqfi
// DWOLLA_SECRET=qgWnslb2ze97p36Kk8aLOVslhTCHDvLaItkLBat8tobnl3LdBo
// DWOLLA_BASE_URL=https://api-sandbox.dwolla.com
// DWOLLA_ENV=sandbox
