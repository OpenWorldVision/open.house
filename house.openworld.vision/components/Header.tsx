import { Box, Button, Flex, Image, Text, useColorMode } from "@chakra-ui/react";
import {
  faBridge,
  faCircle,
  faMoneyBillTransfer,
  faSun,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactSwitch from "react-switch";
import useColorTheme from "../hooks/useColorTheme";

interface HeaderProps {
  title?: string;
}

export default function Header(props: HeaderProps) {
  const { title } = props;
  const { colorMode, toggleColorMode } = useColorMode();

  const {
    textColor,
    buttonDarkColor,
    textButtonDarkColor,
    buttonLightColor,
    textButtonLightColor,
  } = useColorTheme();

  return (
    <>
      <Flex justifyContent={"space-between"}>
        <Image
          borderRadius={"full"}
          boxSize={"35px"}
          src={"/logo.svg"}
          alt={"OpenWorld"}
        />
        <Flex flexDirection={"row"} alignItems={"center"} mr={"18px"}>
          <Text
            fontSize={"17px"}
            fontWeight={"700"}
            color={textColor}
            mr={"18px"}
          >
            {title}
          </Text>
          <Button
            backgroundColor={buttonDarkColor}
            color={textButtonDarkColor}
            p={"0 24px"}
            h={"40px"}
            borderRadius={"20px"}
            fontSize={"14px"}
            fontWeight={"700"}
            mr={"18px"}
          >
            <FontAwesomeIcon
              icon={faMoneyBillTransfer}
              fontSize={"18px"}
              color={textButtonDarkColor}
              style={{ marginRight: "8px" }}
            />
            Trade
          </Button>
          <Button
            backgroundColor={buttonLightColor}
            color={textButtonLightColor}
            p={"0 0 0 24px"}
            h={"40px"}
            borderRadius={"20px"}
            alignItems={"center"}
            fontSize={"14px"}
            fontWeight={"700"}
            mr={"18px"}
          >
            <FontAwesomeIcon
              icon={faWallet}
              fontSize={"18px"}
              color={textButtonLightColor}
              style={{ marginRight: "8px" }}
            />
            Connect Wallet
            <Box
              w={"2px"}
              h={"40px"}
              backgroundColor={textButtonLightColor}
              opacity={0.3}
              margin={"0 0 0 10px"}
            />
            <Button backgroundColor={"transparent"} p={"0 20px 0 10px"}>
              <FontAwesomeIcon
                icon={faCircle}
                fontSize={"18px"}
                color={textButtonLightColor}
              />
            </Button>
          </Button>
          <Flex
            backgroundColor={buttonLightColor}
            color={textButtonLightColor}
            p={"0 14px"}
            h={"40px"}
            borderRadius={"20px"}
            alignItems={"center"}
            justifyContent={"center"}
            fontSize={"14px"}
            fontWeight={"700"}
          >
            <FontAwesomeIcon
              icon={faSun}
              fontSize={"18px"}
              color={textButtonLightColor}
              style={{ marginRight: "8px" }}
            />
            <ReactSwitch
              checked={colorMode === "light"}
              onChange={toggleColorMode}
              onColor={textButtonLightColor}
              uncheckedIcon={false}
              checkedIcon={false}
              width={40}
              handleDiameter={20}
              height={25}
            />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
