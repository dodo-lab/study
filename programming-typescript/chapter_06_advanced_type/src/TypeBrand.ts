export default function TypeBrand() {
  console.log('[型のブランド化]');

  // TypeScriptの型システムは構造型のため、引数として特定のtypeを指定しても
  // 構造が同じであれば別のtypeを渡せてしまう
  {
    type CompanyID = string;
    type OrderID = string;
    type UserID = string;

    function queryForUser(id: UserID) {}

    const id: CompanyID = '128';
    queryForUser(id); // UserID型指定に対して、UserID型と同じ構造のCompanyID型を渡せてしまう
  }

  // 型のブランド化をすることで、上記の問題を解決できる
  {
    // 型のブランド化
    type CompanyID = string & { readonly brand: unique symbol };
    type OrderID = string & { readonly brand: unique symbol };
    type UserID = string & { readonly brand: unique symbol };

    function queryForUser(id: UserID) {}

    // 型のブランド化をしたことで、「const id: CompanyID = '128'」のように代入できなくなり、
    // 明示的に「'128' as CompanyID」とする必要がある。
    function CompanyID(id: string) {
      return id as CompanyID;
    }
    function OrderID(id: string) {
      return id as OrderID;
    }
    function UserID(id: string) {
      return id as UserID;
    }

    const companyId = CompanyID('128');
    const orderId = OrderID('256');
    const userId = UserID('512');

    queryForUser(userId);
    // ★エラー
    // queryForUser(companyId);
    // queryForUser(orderId);
  }
}
