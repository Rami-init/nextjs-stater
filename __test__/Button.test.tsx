import { Button } from "@/components/ui/button";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";


describe("test", () => {
    it("render default", ()=>{
        render(<Button />);
        // Assert 
        expect(screen).toBeDefined()
    })
})