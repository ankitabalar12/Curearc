import React, { useState, useEffect } from 'react';
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

const CustomCalendar = () => {
    const [currentDate, setCurrentDate] = useState(moment());
    const [dates, setDates] = useState([]);
    const [selectedDate, setSelectedDate] = useState(moment());

    useEffect(() => {
        generateDates();
    }, [currentDate]);
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
        setSelectedDate(date);
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
        const isSelected = item.isSame(selectedDate, 'day');
        const isToday = item.isSame(moment(), 'day');

        return (
            <TouchableOpacity
                style={[
                    styles.dateItem,
                    isSelected && styles.selectedDateItem,
                    !isCurrentMonth && styles.nonCurrentMonthDateItem,
                ]}
                onPress={() => handleDatePress(item)}
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
                <TouchableOpacity onPress={handlePrevMonth}>
                  <Image style={styles.leftsideim} source={icons.arrowdrop}></Image>
                </TouchableOpacity>
                <Text style={styles.monthText}>
                    {currentDate.format('MMMM YYYY')}
                </Text>
                <TouchableOpacity onPress={handleNextMonth}>
                   <Image source={icons.arrowdrop} style={styles.dwwonarro}></Image>
                </TouchableOpacity>
            </View>

            {/* Horizontally Scrollable Dates */}
            <FlatList
                data={dates}
                keyExtractor={(item) => item.format('YYYY-MM-DD')}
                renderItem={renderItem}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.flatListContent}
                initialScrollIndex={dates.findIndex(date => date.isSame(selectedDate, 'day'))}
                getItemLayout={(data, index) => (
                    {length: ITEM_WIDTH, offset: ITEM_WIDTH * index, index}
                )}
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
        marginTop:-15
    },
    monthText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#999',
        marginLeft:-260
    
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
        // backgroundColor: '#f2f2f2',
    },
    selectedDateContainer: {
        // backgroundColor: '#00adf5',
        borderRadius:100, width:'100%', height:'100%',justifyContent:'center', alignItems:"center"
        
    },
    nonCurrentMonthDateItem: {
        // backgroundColor: '#f2f2f2',
        // height:60, width:60, borderRadius:100
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
        // marginTop: 5,
        color: '#999',
    },
    selectedDateText: {
        color: '#fff',
    },
    todayText: {
        textDecorationLine: 'underline',
    },
    dwwonarro:{
        height:20, width:20, 
        marginLeft:-230
    },
    leftsideim:{
        height:20, width:20, marginRight:15
    }
});

export default CustomCalendar;
