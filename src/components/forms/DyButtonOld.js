import { Box, Button, DarkMode, LightMode } from "@chakra-ui/react";
import { DyText } from "../typography/DyText";
import DyLink from "../navigation/DyLink";

// TODO Como podemos mejorar la distribucion de ...props?

/**
 * "DyButton" es un componente de botón personalizado y configurable que puede utilizarse
 * de tres maneras diferentes: con texto, con un icono o con ambos, y puede desplazarse a una sección
 * específica de la página o funcionar como enlace interno o externo si se proporciona la propiedad correspondiente.
 *
 * @param {string} props.variant - Variante del botón, por defecto es "solid".
 * @param {string} props.scrollTo - Identificador de la sección a la que se desplazará el botón.
 * @param {string} props.href - URL para enlaces internos o externos.
 * @param {boolean} props.isExternal - Indica si el enlace es externo.
 * @param {object} props.icon - Icono que se asignará al botón.
 * @param {object} props.children - Contenido del botón.
 */
export default function DyButton({
  children,
  variant = "solid",
  color,
  scrollTo,
  href,
  isExternal,
  icon,
  onClick,
  colorScheme = "dyViolet",
  fontWeight,
}) {
  // Determina cómo se renderizará el botón en función del contenido del componente.
  // - Si se proporciona la prop icon y el componente tiene contenido, se establece como "isTextWithIcon".
  // - Si se proporciona solo la prop icon, se establece como "isOnlyIcon".
  // - Si el componente solo tiene contenido, se establece como "isOnlyText".
  let buttonType =
    icon && children
      ? "isTextWithIcon"
      : icon && !children
      ? "isOnlyIcon"
      : "isOnlyText";
  const hasLink = scrollTo || href || isExternal ? true : false;

  /**
   * "BaseButton" es un subcomponente que contiene los estilos y funciones base para el botón.
   *
   * @param {object} props - Otras propiedades que se pueden pasar a "RawButton".
   * @param {object} props.children - Contenido del botón.
   */

  const BaseButton = ({ children, ...props }) => {
    // Determina el modo de color para el botón según el valor ingresado para la prop "variant".
    const ColorMode = variant === "solid" ? LightMode : DarkMode;

    /**
     * "RawButton" es un subcomponente que contiene el botón sin estilos ni funciones personalizados.
     */
    const RawButton = () => {
      return (
        <Button
          px={8}
          py={4}
          borderRadius="full"
          minW="fit-content"
          height="fit-content"
          colorScheme={colorScheme}
          variant={variant}
          onClick={onClick}
          color={color}
          {...props}
        >
          {children}
        </Button>
      );
    };

    return hasLink ? (
      <DyLink scrollTo={scrollTo} href={href} isExternal={isExternal}>
        <ColorMode>
          <RawButton />
        </ColorMode>
      </DyLink>
    ) : (
      <ColorMode>
        <RawButton />
      </ColorMode>
    );
  };

  // Renderiza el contenido del botón según la variable "buttonType".
  switch (buttonType) {
    case "isTextWithIcon":
      return (
        <BaseButton py="0.475rem" pl="0.475rem">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            boxSize={9}
            bg="whiteAlpha.300"
            borderRadius="full"
            mr={4}
          >
            {icon}
          </Box>
          <DyText>{children}</DyText>
        </BaseButton>
      );
    case "isOnlyIcon":
      return (
        <BaseButton px="0.788rem" py="0.788rem">
          {icon}
        </BaseButton>
      );
    case "isOnlyText":
      return (
        <BaseButton>
          <DyText>{children}</DyText>
        </BaseButton>
      );
    default:
      return null;
  }
}
