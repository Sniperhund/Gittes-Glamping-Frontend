import { Button } from "@/components/ui/button"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useEffect, useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import "@/styles/font-size.scss"

const Activity = ({ data, refetch }: any) => {
    if (!data) return <></>

    const deleteActivity = () => {
        fetch(`${import.meta.env.VITE_BACKEND}activities/${data._id}`, {
            method: "DELETE"
        })
            .then(async (val) => {
                if (!val.ok) {
                    toast.error(await val.json())
                }

                refetch()
            })
            .catch((err) => {
                toast.error(err.message)
            })
    }

    const { register, handleSubmit } = useForm()
    const [open, setOpen] = useState(false)

    const updateActivity = (formData: any) => {
        fetch(`${import.meta.env.VITE_BACKEND}activities`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                ...formData,
                _id: data._id
            })
        })
            .then(() => {
                toast.success("Updated activity")

                refetch()
            })

        setOpen(false)
    }

    return <TableRow key={data._id}>
        <TableCell>{data.title}</TableCell>
        <TableCell className="flex justify-between gap-2">
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Button>Update</Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Update activity</DialogTitle>
                    </DialogHeader>
                    <form className="space-y-2" onSubmit={handleSubmit(updateActivity)}>
                        <Label>Title</Label>
                        <Input placeholder="Fællesbål" {...register("title")} defaultValue={data.title} />

                        <Label>Description</Label>
                        <Textarea placeholder="Bål med andre mennesker" {...register("description")} defaultValue={data.description} />

                        <Label>Weekday</Label>
                        <Input placeholder="Mandag" {...register("weekday")} defaultValue={data.weekday} />

                        <Label>Time</Label>
                        <Input placeholder="12:00" {...register("time")} defaultValue={data.time} />

                        <Button type="submit" className="w-full">Submit</Button>
                    </form>
                </DialogContent>
            </Dialog>
            <Button onClick={deleteActivity}>Delete</Button>
        </TableCell>
    </TableRow>
}

export const ActivitiesTable = () => {
    const [activities, setActivities] = useState([])
    const [error, setError] = useState<{ status?: number, message?: string }>({})

    const fetchData = () => {
        fetch(`${import.meta.env.VITE_BACKEND}activities`)
            .then(async (val) => {
                if (!val.ok) {
                    setError({
                        status: val.status,
                        message: await val.json()
                    })
                }

                return await val.json()
            })
            .then((data) => {
                console.log(data)

                setActivities(data)
            })
            .catch((err) => {
                setError({
                    status: 500,
                    message: err.message
                })
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    const { register, handleSubmit } = useForm()
    const [open, setOpen] = useState(false)

    const submit = async (data: any) => {
        await fetch(`${import.meta.env.VITE_BACKEND}activities`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

        toast.success("Added new activity")

        fetchData()
    }

    if (error.status) {
        toast.error(error.message)

        return <></>
    }

    return <article className="space-y-4">
        <Table>
            <TableCaption>Activities</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-full">Activity</TableHead>
                    <TableHead>Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {activities.map((val, index) => <Activity data={val} refetch={fetchData} key={index} />)}
            </TableBody>
        </Table>

        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="w-full">Add new</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add new activity</DialogTitle>
                </DialogHeader>
                <form className="space-y-2" onSubmit={handleSubmit(submit)}>
                    <Label>Title</Label>
                    <Input placeholder="Fællesbål" {...register("title")} />

                    <Label>Description</Label>
                    <Textarea placeholder="Bål med andre mennesker" {...register("description")} />

                    <Label>Weekday</Label>
                    <Input placeholder="Mandag" {...register("weekday")} />

                    <Label>Time</Label>
                    <Input placeholder="12:00" {...register("time")} />

                    <Button type="submit" className="w-full">Submit</Button>
                </form>
            </DialogContent>
        </Dialog>
    </article>
}
