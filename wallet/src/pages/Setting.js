import React from "react";
import {Navigation} from "../components/navigation";
import {Page} from "../utill/enum";
import {goTo} from "react-chrome-extension-router";
import {StoredKey} from "../utill/enum";
import {Login} from "./Login";
import {Button} from "@mui/material";
import {storage} from "../utill/common";
import {Help} from "./Help";
import {Header} from "../components/header";

export const Setting = () => {
  const handleExplainKey = async () => {
    await storage.remove(StoredKey.PASSWORD);
    await storage.remove(StoredKey.PRIVATE_KEY);
    await storage.remove(StoredKey.PUBLIC_KEY);
    await storage.remove(StoredKey.ACCOUNT_ID);
    await storage.remove(StoredKey.MNEMONIC);
    goTo(Help);
  }
  const handleAddNewAccount = async () => {

  }
  return (
    <>
      <Header/>
      <Button onClick={handleAddNewAccount}>add New Account</Button>
      <Button onClick={handleExplainKey}>키 방출하기</Button>
      <Navigation page={Page.SETTING}/>
    </>
  )
}
