import { useCallback, useEffect, useState } from "react";
import { useAccountDatabase } from "../../database/useAccountDatabse";
import { AccountDatabase } from "../../types/accountDatabase";
import { router, useFocusEffect } from "expo-router";
import { formatPhone } from "../../utils/formatPhone";

export default function AccountInfoController(id: string) {

    const accountDatabase = useAccountDatabase();

    const [account, setAccount] = useState<AccountDatabase | null>()

    useFocusEffect(
        useCallback(() => {
            fetchAccount();
        }, [])
    );

    async function fetchAccount() {
        try {
            const response = await accountDatabase.getById(id);

            if (response?.phone) {
                response.phone = formatPhone(response?.phone)
            }

            setAccount(response);
        } catch (error) {
            console.log(error);
        }
    }

    function navigateToEditAccount() {
        router.push(`/accountUpsert/${id}`);
    }

    return {
        account,
        navigateToEditAccount
    };
}