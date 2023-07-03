import { cn } from "@/lib/utils";
import { FC } from "react";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export const UserAuthForm: FC<UserAuthFormProps> = ({
  className,
  ...props
}) => {
  return (
    <div className={cn("flex justify-center", className)} {...props}>
      <button>Google</button>
    </div>
  );
};
