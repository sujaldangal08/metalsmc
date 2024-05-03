import RecentAssignedPickupCard from "./recent-assigned-pickup-card";

const data = [
  {
    avatar:
      "https://cdn3d.iconscout.com/3d/premium/thumb/boy-avatar-6299533-5187865.png",
    name: "Joe Doe",
    truckNumber: "123455A5v",
  },
  {
    avatar:
      "https://cdn3d.iconscout.com/3d/premium/thumb/woman-avatar-6299541-5187873.png",
    name: "Emily Johnson",
    truckNumber: "6789ABC",
  },
  {
    avatar:
      "https://getillustrations.b-cdn.net//photos/pack/3d-avatar-male_lg.png",
    name: "John Smith",
    truckNumber: "XYZ123",
  },
  {
    avatar:
      "https://cdn3d.iconscout.com/3d/premium/thumb/boy-avatar-6299533-5187865.png",
    name: "Joe Doe",
    truckNumber: "123455A5v",
  },
  {
    avatar:
      "https://cdn3d.iconscout.com/3d/premium/thumb/woman-avatar-6299541-5187873.png",
    name: "Emily Johnson",
    truckNumber: "6789ABC",
  },
  {
    avatar:
      "https://getillustrations.b-cdn.net//photos/pack/3d-avatar-male_lg.png",
    name: "John Smith",
    truckNumber: "XYZ123",
  },
  {
    avatar:
      "https://cdn3d.iconscout.com/3d/premium/thumb/boy-avatar-6299533-5187865.png",
    name: "Joe Doe",
    truckNumber: "123455A5v",
  },
  {
    avatar:
      "https://cdn3d.iconscout.com/3d/premium/thumb/woman-avatar-6299541-5187873.png",
    name: "Emily Johnson",
    truckNumber: "6789ABC",
  },
  {
    avatar:
      "https://getillustrations.b-cdn.net//photos/pack/3d-avatar-male_lg.png",
    name: "John Smith",
    truckNumber: "XYZ123",
  },
];

export default function RecentAssigned() {
  return (
    <div className="flex flex-col w-1/4 gap-5">
      <h3 className="text-md font-medium">
        Recently Assigned
        <br />
        <span>Pickup Schedule</span>
      </h3>
      {data?.map((curr, indx) => (
        <RecentAssignedPickupCard curr={curr} key={indx} />
      ))}
    </div>
  );
}
