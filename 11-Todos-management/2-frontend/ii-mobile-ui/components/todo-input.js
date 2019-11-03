import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';

const TodoInput = (props) => {

    let { onSubmit, isEditing } = props
    const [title, setTitle] = useState('');

    useEffect(() => {
        setTitle(props.title)
    }, [props])

    return (
        <View>
            <Input
                value={title}
                placeholder='what to do'
                onChangeText={text => setTitle(text)}
            />
            <Button
                title="Add"
                onPress={e => { onSubmit(title); setTitle('') }}
            />
        </View>
    );
};

export default TodoInput;