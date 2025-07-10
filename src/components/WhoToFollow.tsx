import { getRandomUsers } from "@/actions/user.action"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import Link from "next/link";
import FollowButton from "./FollowButton";

async function WhoToFollow() {
  
    const users = await getRandomUsers();

    if(users.length == 0) return null

    return (
    <Card>
        <CardHeader>
            <CardTitle>Who to follow</CardTitle>
        </CardHeader>
        <CardContent>
        <div className="space-y-4">
          {users.map((user) => (
            <div key={user.id} className="flex gap-2 items-center justify-between ">
              <div className="flex items-center gap-1">
                <Link href={`/profile/${user.username}`}>
                  <Avatar>
                    <AvatarImage className="rounded-full w-12 h-12" src={user.image ?? "/avatar.png"} />
                  </Avatar>
                </Link>
                <div className="text-xs">
                  <Link href={`/profile/${user.username}`} className="px-3 font-medium cursor-pointer">
                    {user.name}
                  </Link>
                  <p className="px-3 text-muted-foreground">@{user.username}</p>
                  <p className="px-3 text-muted-foreground">{user._count.followers} followers</p>
                </div>
              </div>
              <FollowButton userId={user.id} />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
    );
}

export default WhoToFollow