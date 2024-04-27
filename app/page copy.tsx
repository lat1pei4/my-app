"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { use, useEffect } from "react";

const classList = {
  1: { name: "青木" },
  2: { name: "青柳" },
  3: { name: "荒瀬" },
  5: { name: "李" },
  6: { name: "王くん" },
  7: { name: "王さん" },
  10: { name: "小野" },
  11: { name: "郭" },
  14: { name: "河田" },
  17: { name: "斉藤" },
  18: { name: "貞廣" },
  19: { name: "篠﨑" },
  20: { name: "張" },
  21: { name: "周" },
  22: { name: "須一" },
  25: { name: "陳" },
  26: { name: "チェン" },
  27: { name: "ちょう" },
  28: { name: "都筑" },
  29: { name: "坪谷" },
  30: { name: "杜" },
  31: { name: "斗星" },
  35: { name: "潘" },
  36: { name: "平瀬" },
  39: { name: "ヴラド" },
  40: { name: "利" },
  41: { name: "廖" },
};

const una1 = [
  [26, 21, 39, 40, 14],
  [7, 11, 2, 3, 10],
  [5, 25, 27, 22, 28],
  [20, 41, 31, 1],
  [30, 29, 36, 19],
  [6, 35, 17, 18],
];

const una2 = [[1, 3, 5, 6, 7], [], [], [], [], []];

// Helper function to compare two arrays for equality
function arraysMatch(arr1, arr2) {
  // Sort both arrays to ensure the order does not affect comparison
  const sorted1 = arr1.slice().sort((a, b) => a - b);
  const sorted2 = arr2.slice().sort((a, b) => a - b);
  return (
    sorted1.length === sorted2.length &&
    sorted1.every((value, index) => value === sorted2[index])
  );
}

// Validation function to check if any array in una2 exists in una1
function validateUna2(una1, una2) {
  for (let array2 of una2) {
    for (let array1 of una1) {
      if (arraysMatch(array1, array2)) {
        console.log(
          `Array ${JSON.stringify(
            array2
          )} from una2 is a duplicate of an array in una1.`
        );
        return false; // Return false if a duplicate is found
      }
    }
  }
  console.log("All arrays in una2 are unique to una1.");
  return true; // Return true if no duplicates are found
}

export default function Home() {
  useEffect(() => {
    validateUna2(una1, una2);
  }, [una2]);

  return (
    <>
      <div className=" bg-slate-200">
        <div>
          <Table>
            <TableCaption>u&a1</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>1</TableHead>
                <TableHead>2</TableHead>
                <TableHead>3</TableHead>
                <TableHead>4</TableHead>
                <TableHead>5</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {una1.map((row, i) => (
                <TableRow key={i}>
                  {row.map((cell) => (
                    <TableCell key={cell}>{classList[cell].name}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div>
          <Table>
            <TableCaption>u&a2</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>1</TableHead>
                <TableHead>2</TableHead>
                <TableHead>3</TableHead>
                <TableHead>4</TableHead>
                <TableHead>5</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Select
                    onValueChange={(e) => {
                      una2[0][4] = e;
                    }}
                  >
                    <SelectTrigger className="w-[100%]">
                      <SelectValue placeholder="名前" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {Object.keys(classList).map((key) => (
                          <SelectItem key={key} value={key}>
                            {classList[key].name}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
}
