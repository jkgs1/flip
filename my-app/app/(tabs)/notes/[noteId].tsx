import { useState, useEffect } from 'react';
import { TextInput, View } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { getNoteContent, saveNote } from '@/library/api/notes';

export default function NoteEditor() {
    const { noteId } = useLocalSearchParams();
    const [content, setContent] = useState('');

    useEffect(() => {
        const loadNote = async () => {
            const text = await getNoteContent(noteId as string);
            setContent(text);
        };
        loadNote();
    }, [noteId]);

    const handleSave = async () => {
        await saveNote(noteId as string, content);
        // Could navigate back after save
    };

    return (
        <View>
            <TextInput
                multiline
                value={content}
                onChangeText={setContent}
                onBlur={handleSave}
            />
        </View>
    );
}