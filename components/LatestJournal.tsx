import Card from "./Card";
import { useRouter } from "next/router";

const LatestJournal = () => {
  const router = useRouter();

  return (
    <Card
      button
      buttonText="Continue Writing"
      onclick={() => {
        router.push("/my-journals"); // temporary link. will be changed to the latest journal in the future.
      }}
      title="Latest Journal"
      textSize="xl"
    >
      Leo Tolstoy - Anna Karenina
    </Card>
  );
};

export default LatestJournal;
