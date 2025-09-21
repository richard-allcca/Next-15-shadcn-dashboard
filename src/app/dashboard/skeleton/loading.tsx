import { Card, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { randomUUID } from "crypto";

export default function Loading() {

  const data = '123456789'.split(''); // [1,2,3,4,5,6,7,8,9,10]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      {
        data.map(() => {
          return (
            <div className="" key={randomUUID()} >
              <Card className="flex flex-row gap-1 p-2" >
                <CardHeader className="flex flex-col items-center justify-center w-50">
                  <Skeleton
                    // src="https://github.com/shadcn.png"
                    // alt="skeleton"
                    // width={40}
                    // height={40}
                    className="rounded-full w-10 h-10"
                  />
                </CardHeader>

                <div className="w-90 " >
                  <Skeleton className="text-center mb-2 h-[16] w-full"/>
                  <Skeleton className="text-center h-[80] w-full "/>
                </div>
              </Card>
            </div>
          );
        })
      }
    </div>
  );
 }