import { useCallback, useEffect, useState } from "react";
import { useAccountDatabase } from "../../database/useAccountDatabse"
import { AccountDatabase } from "../../types/accountDatabase";
import { useFocusEffect } from "expo-router";

export default function AccountController() {
    const accountDatabase = useAccountDatabase();
    const [accounts, setAccounts] = useState<AccountDatabase[]>();
    const [loading, setLoading] = useState(true);

    useFocusEffect(
        useCallback(() => {
            fetchAccounts();
        }, [])
    );

    async function fetchAccounts() {
        setLoading(true);

        try {
            const response = await accountDatabase.getAllAccounts();
            setAccounts(response);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    return {
        accounts,
        fetchAccounts,
        loading
    }
}