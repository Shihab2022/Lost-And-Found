import { USER_ROLE } from "@/contants/role";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export type IMeta = {
    page: number;
    limit: number;
    total: number;
};

export type UserRole = keyof typeof USER_ROLE;
export type TProfileProps = {
    createdAt: string;
    email: string;
    id: string;
    name: string;
    role: string;
    updatedAt: string;
};
export interface DrawerItem {
    title: string;
    path: string;
    parentPath?: string;
    icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
    child?: DrawerItem[];
}

