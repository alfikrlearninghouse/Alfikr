import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

export const supabase = createClient(
  "https://nqmqnslbaanxuavapksa.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5xbXFuc2xiYWFueHVhdmFwa3NhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE3MDE0MTAsImV4cCI6MjA4NzI3NzQxMH0.T1adoUohUdRiZqZsKyrez8Se4LbqKpI1wz9H5t1RSB0"
);