import { useCallback, useEffect, useState } from "react";
import { useAccountDatabase } from "../../database/useAccountDatabse"
import { AccountDatabase } from "../../types/accountDatabase";
import { useFocusEffect } from "expo-router";

export default function AccountController() {
    const accountDatabase = useAccountDatabase();
    const [loading, setLoading] = useState(true);

    const [accounts, setAccounts] = useState<AccountDatabase[]>([]);
    const [filtered, setFiltered] = useState<AccountDatabase[]>([]);

    useFocusEffect(
        useCallback(() => {
            fetchAccounts();
        }, [])
    );

    useEffect(() => {
        setFiltered(accounts);
    }, [accounts])

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

    const toggleFiltered = (list: AccountDatabase[]) => {
        setFiltered(list)
    }

    return {
        accounts,
        fetchAccounts,
        loading,
        filtered,
        toggleFiltered
    }
}