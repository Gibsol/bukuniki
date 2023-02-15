import { useRouter } from "next/router";
import React from "react";

import Card from "../../components/Card";

const LatestJournal = () => {
  const router = useRouter();

  return (
    <Card
      button
      buttonText="Continue Writing"
      onclick={() => {
        router.push("/coming"); // temporary link. will be changed to the latest journal in the future.
      }}
      title="Latest Journal"
      textSize="xl"
    >
      Leo Tolstoy - Anna Karenina
    </Card>
  );
};

export default LatestJournal;
