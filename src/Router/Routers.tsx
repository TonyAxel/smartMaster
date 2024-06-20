import React, {ReactElement} from 'react';
import {InsightsOutlined, PaidOutlined} from "@mui/icons-material";

interface Route {
    router: string;
    name: string;
    icon: (props: any) => ReactElement<any, any>;
}
export const ROUTERS: Route[] = [
    {
        router: "/overview",
        name: "Статистика",
        icon: (props: any) => <InsightsOutlined {...props}/>
    },
    {
        router: "/transactions",
        name: "Транзакции",
        icon: (props: any) => <PaidOutlined {...props}/>
    }
]