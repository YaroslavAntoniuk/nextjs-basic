import TodoForm from "@/components/TodoForm"

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section className="m-8">
      <h1>Dashboard</h1>
      <div>
        <TodoForm />
      </div>

      {children}
    </section>
  )
}
