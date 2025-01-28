"use client"
import { createContext, useContext } from "react"
// TODO: need to correct the type
export const EmailTemplateContext = createContext<any>([]);

export function useEmailTemplate() {
     const context = useContext(EmailTemplateContext);
     if (context === undefined) {
          throw new Error("useEmailTemplate must be used within a EmailTemplateContextProvider");
     }
     return context;
}