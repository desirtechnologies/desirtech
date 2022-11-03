export type NotionDatabaseProps = {
    properties?: any,
}

export type NotionEmailPropertyProps = {
    email?: string
}

const utils = () => {

    const utilsObject = {
        notion: {
            isDatabase: (key: any, data: { properties: { Database: { select: { name: any } } } }) => {
                return data?.properties?.Database?.select?.name === key
            },
            getProperties: (data: { properties: any }) => {
                return { ...data?.properties } ?? null
            },
            last_edited: (data: { last_edited_time: any }) => {
                return data?.last_edited_time
            },
            status: (data: { status: any[] }) => {
                if (Array.isArray(data?.status)) {
                    return data?.status?.map((status: { name: any }) => (status.name)) ?? null
                } else {
                    return null
                }
            },
            multi_select: (data: { multi_select: any[] }) => {
                return data?.multi_select?.map((item: { name: any }) => item?.name ? item?.name : null) ?? null
            },
            email: (data: NotionEmailPropertyProps) => {
                return data?.email ?? null
            },

            phone: (data: { phone_number: any }) => {
                return data?.phone_number ?? null
            },
            select: (data: { select: { name: any } }) => {
                return data?.select?.name ?? "SELECT_NOT_FOUND"
            },
            date: (data: { date: { start: any } }) => {
                return data?.date?.start ?? null
            },
            number: (data: { number: any }) => {
                return data?.number ?? 0
            },
            formula: (data: { formula: { number: any } }) => {
                return data?.formula?.number ?? 0
            },
            rich_text: (data: { rich_text: any[] }) => {
                if (Array.isArray(data?.rich_text)) {
                    return data?.rich_text.map((text: { plain_text: any }) => (text.plain_text)) ?? "NOT_FOUND"
                } else {
                    return "NOT_FOUND"
                }
            },
            title: (data: { title: { plain_text: any }[] }) => {
                return data?.title[0]?.plain_text ?? "TITLE_NOT_FOUND"
            },
            files: (data: { files: any[] }) => {
                return data?.files?.map((file: { file: { url: any; name: any } }) => ({
                    url: file?.file?.url ?? "URL_NOT_FOUND",
                    name: file?.file?.name ?? "NAME_NOT_FOUND",
                })) ?? null
            },
            url: (data: { url: any }) => {
                return data?.url ?? "URL_NOT_FOUND"
            }

        },


    }

    return { ...utilsObject }
}

export default utils