import React from "react";
import { useUser } from "../../hooks/queries";
import Allocator from "../../components/Allocator/Allocator";

const AllocatorPage = () => {
  const { user } = useUser();

  console.log(user);

  return (
    <div>
      <Allocator allocator={user} />
    </div>
  );
};

export default AllocatorPage;
