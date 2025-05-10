import { Container } from "@mui/material";
import { ReactNode } from "react";

type PageLayoutProps = {
  children: ReactNode;
};

/**
 * Provides a consistent page layout with horizontal padding and max width.
 * Wraps all child content inside a responsive MUI Container.
 *
 * @component
 * @param {Object} props
 * @param {ReactNode} props.children - React children to render inside the layout
 * @returns {JSX.Element} The wrapped page content
 */

function PageLayout({ children }: PageLayoutProps) {
  return (
    <Container maxWidth="xl" sx={{ paddingY: 4 }}>
      {children}
    </Container>
  );
}

export { PageLayout };
