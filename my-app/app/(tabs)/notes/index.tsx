import { useEffect, useState } from 'react';
import { View, Text, FlatList, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { getAllNotes } from '@/library/api/notes';
import type { Note } from '@/library/types/notes';

export default function NotesScreen() {
    const [notes, setNotes] = useState<Note[]>([]);

    useEffect(() => {
        const loadNotes = async () => {
            const loadedNotes = await getAllNotes();
            setNotes(loadedNotes);
        };
        loadNotes();
    }, []);

    return (
        <View>
            <FlatList
                data={notes}
                renderItem={({ item }) => (
                    <Link href={`/notes/${item.id}`} asChild>
                        <Pressable>
                            <Text>{item.title}</Text>
                        </Pressable>
                    </Link>
                )}
            />
        </View>
    );
}