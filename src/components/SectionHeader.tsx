import { Badge } from "./ui/badge";

type SectionHeaderProps = {
    badgeText: string;
    description?: string;
}

export default function SectionHeader({ badgeText, description }: SectionHeaderProps) {
    return (
        <div className="flex flex-col items-center text-center">
            <Badge variant="secondary">{badgeText}</Badge>
            {description && <p className="mt-4">{description}</p>}
        </div>
    )
}