import * as FileSystem from 'expo-file-system';
import { Platform } from 'react-native';

const NOTES_DIR = FileSystem.documentDirectory + 'notes/';


{/* Web fallback using localStorage */}
const getWebFileInfo = async (path) => {
    const content = localStorage.getItem(path);
    return {
        exists: content !== null,
        uri: path,
        size: content?.length || 0,
    };
};

const getInfoAsync = (path) => {
    if (Platform.OS === 'web') {
        return getWebFileInfo(path);
    }
    return FileSystem.getInfoAsync(path);
};

const ensureDirExists = async () => {
    const dirInfo = await FileSystem.getInfoAsync(NOTES_DIR);
    if (!dirInfo.exists) {
        await FileSystem.makeDirectoryAsync(NOTES_DIR, { intermediates: true });
    }
};

export const getAllNotes = async () => {
    await ensureDirExists();
    const files = await FileSystem.readDirectoryAsync(NOTES_DIR);
    return files.map(file => ({
        id: file,
        title: file.replace('.txt', ''),
        path: NOTES_DIR + file
    }));
};

export const getNoteContent = async (filename) => {
    try {
        return await FileSystem.readAsStringAsync(NOTES_DIR + filename);
    } catch (e) {
        return '';
    }
};

export const saveNote = async (filename, content) => {
    await ensureDirExists();
    await FileSystem.writeAsStringAsync(NOTES_DIR + filename, content);
};

export const deleteNote = async (filename) => {
    await FileSystem.deleteAsync(NOTES_DIR + filename);
};