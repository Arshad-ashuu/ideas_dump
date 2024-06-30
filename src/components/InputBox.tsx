import { Input } from "@/components/ui/input";

export function InputDemo() {
  return (
    <Input
      type="text"
      placeholder="Enter your idea here"
      className="flex justify-center items-center lg:w-1/2 mt-12 rounded-xl h-14 dark:border-gray-600 border-gray-500 border-b shadow-lg"
    />
  );
}
