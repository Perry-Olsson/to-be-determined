import { useApolloClient } from "@apollo/client";
import React, { FC, SetStateAction } from "react";
import { Logout } from "../../components";
import { Drawer, DrawerItem } from "../../components/Drawer";
import { LoadingModal } from "../../components/LoadingModal";
import { useDeleteAccountMutation } from "../../generated/graphql";
import { Text } from "../../components";
import { ME } from "../../graphql/queries";
import { formatError } from "../../hooks";
import { Alert } from "react-native";

interface Props {
  visible: boolean;
  setVisible: React.Dispatch<SetStateAction<boolean>>;
}

export const MenuDrawer: FC<Props> = ({ visible, setVisible }) => {
  const client = useApolloClient();
  const [deleteAccount, result] = useDeleteAccountMutation();

  return (
    <Drawer visible={visible} setVisible={setVisible}>
      <DrawerItem onPress={() => console.log("hello")}>
        <Logout
          style={{
            backgroundColor: "#333333",
            padding: 10,
            borderTopWidth: 1,
            borderTopColor: "white",
            alignItems: "flex-start",
          }}
        />
      </DrawerItem>
      <DrawerItem
        onPress={async () => {
          //alert user for delete confirmation before firing
          Alert.alert(
            "Account deletion",
            "Are you sure you want to delete your account?",
            [
              {
                text: "Yes",
                onPress: async () => {
                  const response = await deleteAccount();
                  if (response.data) {
                    if (response.data.deleteAccount.success) {
                      client.writeQuery({ query: ME, data: { me: null } });
                      await client.resetStore();
                    } else {
                      alert(formatError(response.data.deleteAccount.errors!));
                    }
                  } else if (response.errors)
                    alert(formatError(response.errors));
                },
                style: "destructive",
              },
              {
                text: "No",
                style: "cancel",
              },
            ]
          );
        }}
        text="Delete Account"
      />
      <LoadingModal visible={result.loading}>
        <Text>Deleting your account</Text>
      </LoadingModal>
    </Drawer>
  );
};
