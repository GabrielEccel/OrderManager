import { useCallback, useEffect, useState } from "react";
import { useAccountDatabase } from "../../database/useAccountDatabse";
import { AccountDatabase } from "../../types/accountDatabase";
import { router, useFocusEffect } from "expo-router";

export default function AccountInfoController(id: string){

    const accountDatabase = useAccountDatabase();

    const [account, setAccount] = useState<AccountDatabase | null>()
    
    useFocusEffect(
            useCallback(() => {
                fetchAccount();
            }, [])
        );

    async function fetchAccount(){
        try {
            const response = await accountDatabase.getById(id);

            setAccount(response);
        } catch (error) {
            console.log(error);
        }
    }

    function navigateToEditAccount(){
        router.push(`/accountUpsert/${id}`);
    }

    return {
        account,
        navigateToEditAccount
    };
}