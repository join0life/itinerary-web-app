import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { SearchIcon } from "lucide-react";

export default function SearchProject() {
  return (
    <InputGroup>
      <InputGroupInput placeholder="키워드 입력..." />
      <InputGroupAddon>
        <SearchIcon />
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">
        <InputGroupButton></InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  );
}
