"use client";

import { WithAsProp } from "@/lib/types";
import { HTMLAttributes } from "react";

export type PageLoadAnimationSectionProps = WithAsProp<
        HTMLAttributes<HTMLDivElement>
>;
export type PageLoadAnimationWrapperProps = WithAsProp<
        HTMLAttributes<HTMLDivElement>
>;

export function PageLoadAnimationWrapper(props: PageLoadAnimationWrapperProps) {
    const { as: Component = "main", ...rest } = props;

    return <Component {...rest} />;
}

export function PageLoadAnimationSection(props: PageLoadAnimationSectionProps) {
    const { as: Component = "section", ...rest } = props;

    return <Component {...rest} />;
}