import React, { useState, useEffect, useRef } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    FlatList,
    Dimensions,
} from 'react-native';
import moment from 'moment';
import { Image } from 'react-native-animatable';
import { icons } from '../../Helper/icons';
import LinearGradient from 'react-native-linear-gradient';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = 50; // Width of each date item
const ITEM_HEIGHT = 50; // Height of each date item

const CustomCalendarMultip = () => {
    const [currentDate, setCurrentDate] = useState(moment());
    const [dates, setDates] = useState([]);
    const [selectedDates, setSelectedDates] = useState([]); // Array of selected date strings

    const flatListRef = useRef(null);

    useEffect(() => {
        generateDates();
    }, [currentDate]);

    useEffect(() => {
        // Scroll to the first selected date when dates are generated
        if (flatListRef.current && selectedDates.length > 0) {
            const index = dates.findIndex(date => date.isSame(selectedDates[0], 'day'));
            if (index !== -1) {
                flatListRef.current.scrollToIndex({ index, animated: true });
            }
        }
    }, [dates, selectedDates]);

    const gradientColors = [
        '#136001',
        '#1d6500',
        '#286a01',
        '#3d7401',
        '#457801',
        '#578001',
        '#728d01',
        '#809400',
        '#8c9901',
        '#989f01',
        '#a0a300',
        '#a9a700',
    ];

    const generateDates = () => {
        const startOfMonth = currentDate.clone().startOf('month');
        const endOfMonth = currentDate.clone().endOf('month');

        // Determine the start and end dates for the list (including previous and next month's dates)
        const startDate = startOfMonth.clone().subtract(7, 'days'); // Show 7 days from previous month
        const endDate = endOfMonth.clone().add(7, 'days'); // Show 7 days from next month

        const day = startDate.clone();
        const datesArray = [];

        while (day.isBefore(endDate, 'day')) {
            datesArray.push(day.clone());
            day.add(1, 'day');
        }

        setDates(datesArray);
    };

    const handleDatePress = (date) => {
        const dateString = date.format('YYYY-MM-DD');
        if (selectedDates.includes(dateString)) {
            // Deselect the date
            setSelectedDates(selectedDates.filter(item => item !== dateString));
        } else {
            // Select the date
            setSelectedDates([...selectedDates, dateString]);
        }
    };

    // Functions to navigate months
    const handlePrevMonth = () => {
        setCurrentDate(currentDate.clone().subtract(1, 'month'));
    };

    const handleNextMonth = () => {
        setCurrentDate(currentDate.clone().add(1, 'month'));
    };

    // Render each date item
    const renderItem = ({ item }) => {
        const isCurrentMonth = item.month() === currentDate.month();
        const dateString = item.format('YYYY-MM-DD');
        const isSelected = selectedDates.includes(dateString);
        const isToday = item.isSame(moment(), 'day');

        return (
            <TouchableOpacity
                style={[
                    styles.dateItem,
                    !isCurrentMonth && styles.nonCurrentMonthDateItem,
                ]}
                onPress={() => handleDatePress(item)}
                activeOpacity={0.7}
                accessibilityLabel={`${item.format('dddd')}, ${item.format('MMMM D, YYYY')}`}
                accessibilityRole="button"
            >
                {isSelected ? (
                    <LinearGradient
                        style={styles.selectedDateContainer}
                        colors={gradientColors}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                    >
                        <Text style={[styles.dateText, styles.selectedDateText]}>
                            {item.date()} {/* Date number */}
                        </Text>
                        <Text style={[styles.dayText, styles.selectedDayText]}>
                            {item.format('ddd')} {/* Day name */}
                        </Text>
                    </LinearGradient>
                ) : (
                    <>
                        <Text
                            style={[
                                styles.dateText,
                                !isCurrentMonth && styles.nonCurrentMonthDateText,
                                isToday && styles.todayDateText,
                            ]}
                        >
                            {item.date()} {/* Date number */}
                        </Text>
                        <Text
                            style={[
                                styles.dayText,
                                !isCurrentMonth && styles.nonCurrentMonthDayText,
                                isToday && styles.todayText,
                            ]}
                        >
                            {item.format('ddd')} {/* Day name */}
                        </Text>
                    </>
                )}
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            {/* Header with Month and Year, and Navigation Buttons */}
            <View style={styles.header}>
                <TouchableOpacity onPress={handlePrevMonth} accessibilityLabel="Previous Month" accessibilityRole="button">
                    <Image style={styles.leftsideim} source={icons.arrowdrop} />
                </TouchableOpacity>
                <Text style={styles.monthText}>
                    {currentDate.format('MMMM YYYY')}
                </Text>
                <TouchableOpacity onPress={handleNextMonth} accessibilityLabel="Next Month" accessibilityRole="button">
                    <Image source={icons.arrowdrop} style={styles.dwwonarro} />
                </TouchableOpacity>
            </View>

            {/* Horizontally Scrollable Dates */}
            <FlatList
                ref={flatListRef}
                data={dates}
                keyExtractor={(item) => item.format('YYYY-MM-DD')}
                renderItem={renderItem}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.flatListContent}
                initialScrollIndex={dates.findIndex(date => date.isSame(selectedDates[0], 'day'))}
                getItemLayout={(data, index) => (
                    { length: ITEM_WIDTH, offset: ITEM_WIDTH * index, index }
                )}
                onScrollToIndexFailed={(info) => {
                    const wait = new Promise(resolve => setTimeout(resolve, 500));
                    wait.then(() => {
                        flatListRef.current?.scrollToIndex({ index: info.index, animated: true });
                    });
                }}
                // Optional: Improve performance with keyExtractor and memoization
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 10,
        marginTop: -15,
    },
    monthText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#999',
        marginLeft: -260, // Adjust or remove based on layout
    },
    navButton: {
        fontSize: 18,
        color: '#00adf5',
        padding: 10,
    },
    flatListContent: {
        paddingHorizontal: 10,
    },
    dateItem: {
        width: ITEM_WIDTH,
        height: ITEM_HEIGHT,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5,
        borderRadius: 100,
        // Optional: Add background color or shadows
    },
    selectedDateContainer: {
        borderRadius: 100,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: "center",
    },
    nonCurrentMonthDateItem: {
        // Optional: Style for non-current month dates
    },
    dayText: {
        fontSize: 13,
        color: '#999',
    },
    selectedDayText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    nonCurrentMonthDayText: {
        color: '#999',
    },
    dateText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#999',
    },
    selectedDateText: {
        color: '#fff',
    },
    todayText: {
        textDecorationLine: 'underline',
    },
    dwwonarro: {
        height: 20,
        width: 20,
        marginLeft: -230, // Adjust based on layout
    },
    leftsideim: {
        height: 20,
        width: 20,
        marginRight: 15,
    },
    eventDot: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: 'red',
        position: 'absolute',
        bottom: 5,
    },
});

export default CustomCalendarMultip;
