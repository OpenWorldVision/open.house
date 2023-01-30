import { useColorModeValue } from "@chakra-ui/react";

export default function useColorTheme() {
  const textColor = useColorModeValue(`#1A2B6B`, `#DFE7FB`);

  const textButtonLightColor = useColorModeValue(`#375BD2`, `#DFE7FB`);
  const textButtonDarkColor = useColorModeValue(`#DFE7FB`, `#1A2B6B`);

  const buttonLightColor = useColorModeValue(`#DFE7FB`, `#202F65`);
  const buttonDarkColor = useColorModeValue(`#375BD2`, `#DFE7FB`);

  return {
    textColor,
    textButtonLightColor,
    textButtonDarkColor,
    buttonLightColor,
    buttonDarkColor,
  };
}
