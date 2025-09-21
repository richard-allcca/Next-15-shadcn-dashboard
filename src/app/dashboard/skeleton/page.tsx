
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { randomUUID } from "crypto";
import Image from "next/image";

const getData = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 3000);
  });

  return '123456789'.split(''); // [1,2,3,4,5,6,7,8,9,10]
};

export default async function Page() {
  const data = await getData();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      {
        data.map(() => {
          return (
            <div className="" key={randomUUID()} >
              <Card className="flex flex-row gap-1 p-2" >
                <CardHeader className="flex items-center justify-center w-50">
                  <Image
                    src="https://github.com/shadcn.png"
                    alt="skeleton"
                    width={40}
                    height={40}
                    className="rounded-full w-10 h-10"
                  />
                </CardHeader>

                <div>
                  <CardTitle className="text-center mb-2">skeleton</CardTitle>
                  <CardDescription className="text-center">
                    This is a placeholder component that mimics the structure of the actual content while it is loading.
                  </CardDescription>
                </div>
              </Card>
            </div>
          );
        })
      }
    </div>
  );
}
