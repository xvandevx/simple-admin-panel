import React, {useState} from 'react';
import {LoadingOutlined, PlusOutlined} from '@ant-design/icons';
import {Api} from "~/api";
import InfoBlock, {FormEditFieldTypes} from "~/components/infoBlock";
import {SkillFields} from "~/backendTypes/skill";
const _ = require('lodash');

export default function Skills() {
    const tableItems: SkillFields[] = [
        SkillFields.name,
        SkillFields.category,
        SkillFields.icon
    ];

    const editFormItems = [
        {
            name: SkillFields.name,
            required: true,
            type: FormEditFieldTypes.string,
        },
        {
            name: SkillFields.category,
            required: true,
            type: FormEditFieldTypes.string,
            options: [
                {
                    label: 'Programming languages',
                    value: 'Programming languages',
                },
                {
                    label: 'Os',
                    value: 'Os',
                },
                {
                    label: 'Tools',
                    value: 'Tools',
                }
            ]
        },
        {
            name: SkillFields.icon,
            type: FormEditFieldTypes.string,
        },
    ]

    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState<string>();

    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined rev={undefined} /> : <PlusOutlined rev={undefined} />}
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );

    return (
        <InfoBlock
            tableItems={tableItems}
            getTableItems={Api.skills.get}
            deleteTableItem={Api.skills.delete}
            updateItem={Api.skills.update}
            addItem={Api.skills.add}
            prepareFormFields={(record: any) => {
                const data =  _.cloneDeep(record)
                return data
            }}
            editFormItems={editFormItems}
        />
    )
}
