import { memo } from "react"

interface LogoProps {
}

export const Logo = memo((props:LogoProps) => {
return (<div>
   ЛОГО
</div>)})

Logo.displayName = "Logo"