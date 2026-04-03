import { useCallback, useEffect, useState } from "react";
import { useAccountDatabase } from "../../database/useAccountDatabse"
import { AccountDatabase } from "../../types/accountDatabase";
import { useFocusEffect } from "expo-router";

export default function AccountController() {
    const accountDatabase = useAccountDatabase();
    const [accounts, setAccounts] = useState<AccountDatabase[]>();

    useFocusEffect(
        useCallback(() => {
            fetchAccounts();
        }, [])
    );

    async function fetchAccounts() {
        const response = await accountDatabase.listAllAccounts();
        setAccounts(response);
    }

    return {
        accounts,
        fetchAccounts
    }
}