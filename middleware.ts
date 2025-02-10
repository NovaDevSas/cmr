import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/login", // Redirige a la página de login si no está autenticado
  },
});

export const config = {
  matcher: ["/user/:path*", "/company/:path*"], // Rutas protegidas
};