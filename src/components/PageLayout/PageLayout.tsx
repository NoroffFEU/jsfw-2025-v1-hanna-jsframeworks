import { Container } from "@mui/material";
import { ReactNode } from "react";

type PageLayoutProps = {
  children: ReactNode;
};

function PageLayout({ children }: PageLayoutProps) {
  return (
    <Container maxWidth="xl" sx={{ paddingY: 4 }}>
      {children}
    </Container>
  );
}

export { PageLayout };
