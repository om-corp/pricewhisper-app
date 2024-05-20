import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import { Color } from './Styles'

export default function Loading() {
    return (
        <>
            <ActivityIndicator size={50} color={Color.BRAND} />
            <Text>Carregando...</Text>
        </>
    )
}

const styles = StyleSheet.create({})